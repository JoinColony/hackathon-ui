// league tier is floored log2 of leagueId, plus 1
export const getLeagueTier = (leagueId: number) =>
  Math.floor(Math.log2(leagueId)) + 1;

const DECAY_FACTOR = 0.95;
const PROJECTS_PER_LEAGUE = 3;

const calculateTotalWeight = (): number => {
  let totalWeight = 0;
  for (let project = 1; project <= PROJECTS_PER_LEAGUE; project++) {
    totalWeight += Math.pow(DECAY_FACTOR, project - 1);
  }
  return totalWeight;
};

export const calculateSingleProjectBudget = (
  tier: number,
  projectPosition: number,
  totalBudget: number,
): number => {
  console.log('calculating for tier ', tier, ' project pos ', projectPosition);

  const numLeaguesPerTier = Math.pow(2, tier - 1);
  const leagueBudget = totalBudget / numLeaguesPerTier;
  const totalWeight = calculateTotalWeight();
  const weight = Math.pow(DECAY_FACTOR, projectPosition - 1);
  const projectBudget = (weight / totalWeight) * leagueBudget;
  console.log({
    numLeaguesPerTier,
    leagueBudget,
    totalWeight,
    weight,
    projectBudget,
  });
  return Math.round(projectBudget * 100) / 100;
};
