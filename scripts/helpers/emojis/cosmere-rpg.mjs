import { getThisModuleSetting } from "../modulesettings.mjs"

export const actionGlyphEmojis = {
    "1": "<:1_action_c:1442707450351452321>",
    "2": "<:2_actions_c:1442707939860414524>",
    "3": "<:3_actions_c:1442707918536573028>",
    "4": "<:free_action_c:1442710476307038251>",
    "5": "<:reaction_c:1442710494086566059>",
    "a": "<:1_action_c:1442707450351452321>",
    "d": "<:2_actions_c:1442707939860414524>",
    "t": "<:3_actions_c:1442707918536573028>",
    "f": "<:free_action_c:1442710476307038251>",
    "r": "<:reaction_c:1442710494086566059>"
}

export const systemIcons = {
    complication: "<:complication:1442723268590174208>",
    opportunity: "<:opportunity:1442725641735766066>",
    passive: "<:passive:1442726521599955024>",
    special: "<:special:1442713957377773628>",
    cosmere: "<:cosmere:1442713923714416730>"
}

export const plotDieEmojis = {
    "1": "<:complication2:1502472596409552906>",
    "2": "<:complication4:1502472630496792676>",
    "3": "<:blank:1502474064575332463>",
    "4": "<:blank:1502474064575332463>",
    "5": "<:opportunity:1442725641735766066>",
    "6": "<:opportunity:1442725641735766066>"
}

export function getPlotDieEmoji(faces, result){
    if(!getThisModuleSetting('prettierEmojis') || !plotDieEmojis[faces]){
        return () => {
            switch(result){
                case 1:
                    return "2✹,";
                case 2:
                    return "4✹,";
                case 3:
                    return "-,";
                case 4:
                    return "-,";
                case 5:
                    return "✧,";
                case 6:
                    return " ✧,";
            }
        }
    }
    return plotDieEmojis[result];
}

export const targetEmoji = "<:target:1180380227403259975>"