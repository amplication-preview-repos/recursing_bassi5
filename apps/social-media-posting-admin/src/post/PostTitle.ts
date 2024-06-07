import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "agentName";

export const PostTitle = (record: TPost): string => {
  return record.agentName?.toString() || String(record.id);
};
