const mapping: Record<string, string> = {
  businesses: 'business',
  feedbacks: 'feedback',
  strategies: 'strategy',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
