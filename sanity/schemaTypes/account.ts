export default {
  name: 'account',
  type: 'document',
  title: 'Account',
  fields: [
    {name: 'providerType', type: 'string'},
    {name: 'providerId', type: 'string'},
    {name: 'providerAccountId', type: 'string'},
    {name: 'refreshToken', type: 'string'},
    {name: 'accessToken', type: 'string'},
    {name: 'accessTokenExpires', type: 'number'},
    {name: 'user', title: 'user', type: 'reference', to: {type: 'user'}},
  ],
}
