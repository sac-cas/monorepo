import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { SaccasAppGeneratorSchema, NormalizedSchema } from './schema';
import { remote } from '@nrwl/angular/generators';

function addFiles(tree: Tree, options: SaccasAppGeneratorSchema) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    readProjectConfiguration(tree, options.name).root,
    {
      ...options,
      template: '',
    }
  );
}

function getNormalizedOptions(
  options: SaccasAppGeneratorSchema
): NormalizedSchema {
  return (({ i18next, ...o }) => o)(options);
}

export default async function (tree: Tree, options: SaccasAppGeneratorSchema) {
  await remote(tree, getNormalizedOptions(options));

  addFiles(tree, options);

  await formatFiles(tree);
}
