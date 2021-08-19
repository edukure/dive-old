import Adapters from 'next-auth/adapters';
/* 
  name, email, image, emailVerified são os campos padrão do UserModel
  squad: squad atual do scuba
  id_alura: estava no arquivo do IG-11, mas não sei qual a utilidade
  id_discord: serve para identificação do scuba para o IG-11
  aluraUser: nome de usuário da alura
  
  related issue: https://github.com/nextauthjs/next-auth/issues/861
*/

export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  constructor(
    name,
    email,
    image,
    emailVerified,
    githubUser,
    aluraUser,
    squad,
    id_alura,
    id_discord,
  ) {
    super(name, email, image, emailVerified);
    this.githubUser = githubUser;
    this.aluraUser = aluraUser;
    this.squad = squad;
    this.id_alura = id_alura;
    this.id_discord = id_discord;
  }
}

type Schema = typeof Adapters.TypeORM.Models.User.schema;

export const UserSchema: Schema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    githubUser: {
      type: 'string',
      nullable: true,
      unique: true,
    },
    aluraUser: {
      type: 'string',
      nullable: true,
      unique: true,
    },
    squad: {
      type: 'string',
      nullable: true,
    },
    id_alura: {
      type: 'string',
      nullable: true,
      unique: true,
    },
    id_discord: {
      type: 'string',
      nullable: true,
      unique: true,
    },
  },
};
