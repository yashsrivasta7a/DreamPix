import { fal } from "@fal-ai/client";

const result = await fal.subscribe("fal-ai/minimax-image", {
  input: {
    prompt: "Man dressed in white t shirt, full-body stand front view image, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic"
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
});
console.log(result.data);
console.log(result.requestId);