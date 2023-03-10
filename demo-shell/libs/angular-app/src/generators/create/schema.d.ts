export interface SaccasAppGeneratorSchema extends NormalizedSchema {
  i18next?: boolean;
}

export interface NormalizedSchema {
  name: string;
  tags?: string;
  directory?: string;
  addTailwind?: boolean;
  host: string;
  port?: number;
  prefix?: string;
}
