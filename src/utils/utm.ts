export function addUTMParams(
  url: string,
  params: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  }
): string {
  try {
    const urlObj = new URL(url);
    if (params.source) urlObj.searchParams.set("utm_source", params.source);
    if (params.medium) urlObj.searchParams.set("utm_medium", params.medium);
    if (params.campaign)
      urlObj.searchParams.set("utm_campaign", params.campaign);
    if (params.content) urlObj.searchParams.set("utm_content", params.content);
    return urlObj.toString();
  } catch {
    return url;
  }
}
