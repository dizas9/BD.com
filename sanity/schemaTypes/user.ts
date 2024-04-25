export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'emailVerified',
      title: 'EmailVerified',
      type: 'datetime',
      hidden: true,
    },
  ],
}
