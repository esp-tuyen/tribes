export interface IBanner {
  id: string;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    link_active: string;
    pinned_home: boolean;
    image: {
      data: {
        id: string;
        attributes: {
          url: string;
        };
      };
    };
  };
}
