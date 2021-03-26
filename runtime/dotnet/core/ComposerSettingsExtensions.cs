using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;

namespace Microsoft.BotFramework.Composer.Core
{
    public static class ComposerSettingsExtensions
    {
        /// <summary>
        /// Setup configuration to utilize the settings file generated by bf luis:build and qna:build. This is a luis and qnamaker settings extensions adapter aligning with Composer customized settings.
        /// </summary>
        /// <remarks>
        /// This will pick up LUIS_AUTHORING_REGION or --region settings as the setting to target.
        /// This will pick up --environment as the environment to target.  If environment is Development it will use the name of the logged in user.
        /// This will pick up --root as the root folder to run in.
        /// </remarks>
        /// <param name="builder">Configuration builder to modify.</param>
        /// <returns>Modified configuration builder.</returns>
        public static IConfigurationBuilder UseComposerSettings(this IConfigurationBuilder builder)
        {
            var configuration = builder.Build();
            var botRoot = configuration.GetValue<string>("bot") ?? ".";
            var luisRegion = configuration.GetValue<string>("LUIS_AUTHORING_REGION") ?? configuration.GetValue<string>("luis:authoringRegion") ?? configuration.GetValue<string>("luis:region") ?? "westus";
            var qnaRegion = configuration.GetValue<string>("qna:qnaRegion") ?? "westus";
            var environment = configuration.GetValue<string>("luis:environment") ?? Environment.UserName;
            var settings = new Dictionary<string, string>();
            var luisEndpoint = configuration.GetValue<string>("luis:endpoint");
            if (String.IsNullOrWhiteSpace(luisEndpoint))
            {
                luisEndpoint = $"https://{luisRegion}.api.cognitive.microsoft.com";
            }
            settings["luis:endpoint"] = luisEndpoint;
            settings["BotRoot"] = botRoot;
            builder.AddInMemoryCollection(settings);
            if (environment == "Development")
            {
                environment = Environment.UserName;
            }

            var luisSettingsPath = Path.GetFullPath(Path.Combine(botRoot, "generated", $"luis.settings.{environment.ToLower()}.{luisRegion}.json"));
            var luisSettingsFile = new FileInfo(luisSettingsPath);
            if (luisSettingsFile.Exists)
            {
                builder.AddJsonFile(luisSettingsFile.FullName, optional: false, reloadOnChange: true);
            }

            var qnaSettingsPath = Path.GetFullPath(Path.Combine(botRoot, "generated", $"qnamaker.settings.{environment.ToLower()}.{qnaRegion}.json"));
            var qnaSettingsFile = new FileInfo(qnaSettingsPath);
            if (qnaSettingsFile.Exists)
            {
                builder.AddJsonFile(qnaSettingsFile.FullName, optional: false, reloadOnChange: true);
            }

            return builder;
        }
    }
}
