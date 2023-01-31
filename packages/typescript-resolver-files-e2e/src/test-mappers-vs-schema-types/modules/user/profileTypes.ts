export interface ProfileMapper {
  id: number;
  userId: number;
}

export interface ProfileMeta {
  id: number;
  completedActions: string[];
  others: {
    value: string;
  }[];
  score: ProfileHealth['score'];
}

interface ProfileHealth {
  score: number;
  viewCount: number;
}
