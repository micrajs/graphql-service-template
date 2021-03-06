const MakeServiceProvider = {
  command: 'make:service-provider',
  description: 'Generate a new domain interface',
  arguments: [
    {
      name: 'domain',
      description: 'Domain name.',
      required: true,
    },
  ],
  options: [
    {
      name: 'force',
      alias: 'f',
      description: 'Should overwrite file if it exists',
      default: false,
    },
  ],
  async handler({
    createFile,
    parser,
    template,
    variationsOf,
    defaultVariables,
  }) {
    try {
      const { domains } = use('paths/helpers');
      // Params
      const RAW_DOMAIN = parser.getArgument(0).value || undefined;
      const FORCE = parser.getOption('force').value || undefined;

      // Definition
      const DOMAIN = variationsOf(RAW_DOMAIN);
      const FILES = [
        // [PATH, TEMPLATE]
        [
          domains(DOMAIN.SINGULAR.KEBAB, `index.ts`),
          template('domains.data.service-provider'),
        ],
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(
          path,
          use('TemplateEngine').render(
            template,
            defaultVariables({
              DOMAIN,
            }),
          ),
          FORCE,
        );
      });
    } catch (e) {
      if (e.message.endsWith('already exists.')) {
        throw new Error(
          `${e.message} Please choose a different name, path or use the --force flag to overwrite the existing file.`,
        );
      }

      throw e;
    }
  },
};

module.exports = MakeServiceProvider;
