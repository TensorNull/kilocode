import type { ModelInfo } from "../model.js"

// CometAPI model definitions
// CometAPI provides access to various AI models through their unified API

export type CometApiModelId = keyof typeof cometApiModels
export const cometApiDefaultModelId: CometApiModelId = "claude-3-5-sonnet-20241022"

export const cometApiModels = {
	"claude-3-5-sonnet-20241022": {
		maxTokens: 8192,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 3.0,
		outputPrice: 15.0,
		description: "Anthropic's Claude 3.5 Sonnet via CometAPI",
	},
	"claude-3-5-haiku-20241022": {
		maxTokens: 8192,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 1.0,
		outputPrice: 5.0,
		description: "Anthropic's Claude 3.5 Haiku via CometAPI",
	},
} as const satisfies Record<string, ModelInfo>
