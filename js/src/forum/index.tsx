import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';

app.initializers.add('external-links', () => {

  extend('flarum/forum/components/IndexSidebar', 'navItems', function (this: any, items: ItemList<Mithril.Children>) {

    // Vi lägger till en separator (ett streck) direkt under taggarna
    // Prioritet -49 gör att den hamnar precis ovanför din första länk (-50)
    items.add(
      'custom-sidebar-separator',
      <hr className="Dropdown-separator" />,
      -49
    );

    items.add(
      'custom-sidebar-heading',
      <li className="IndexSidebar-nav-heading">Följ oss på</li>,
      -50
    );

    // Extern länk
    items.add(
      'external-bluesky-link',
      <a className="Button Button--link" href="https://bsky.app/profile/noden.forum" target="_blank" rel="noopener noreferrer">
        <span className="Button-icon"><i className="fa-brands fa-bluesky"></i></span>
        <span className="Button-label">Bluesky</span>
      </a>,
      -55
    );
    // Extern länk
    items.add(
      'external-mastodon-link',
      <a className="Button Button--link" href="https://mastodon.social/@nodenforum" target="_blank" rel="noopener noreferrer">
        <span className="Button-icon"><i className="fa-brands fa-mastodon"></i></span>
        <span className="Button-label">Mastodon</span>
      </a>,
      -57
    );
  });
});
