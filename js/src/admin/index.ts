import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('redundans-external-links', () => {
  console.log('[redundans/external-links] Hello, admin!');
});
