export type PageHeaderContent = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export type PageMetadata = {
  title: string;
  description: string;
};

export type PageContent = {
  metadata: PageMetadata;
  header: PageHeaderContent;
};
