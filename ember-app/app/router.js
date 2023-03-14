import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-book-club-2-1-book-l');
  this.route('i-i-s-book-club-2-1-book-e',
  { path: 'i-i-s-book-club-2-1-book-e/:id' });
  this.route('i-i-s-book-club-2-1-book-e.new',
  { path: 'i-i-s-book-club-2-1-book-e/new' });
  this.route('i-i-s-book-club-2-1-meeting-l');
  this.route('i-i-s-book-club-2-1-meeting-e',
  { path: 'i-i-s-book-club-2-1-meeting-e/:id' });
  this.route('i-i-s-book-club-2-1-meeting-e.new',
  { path: 'i-i-s-book-club-2-1-meeting-e/new' });
  this.route('i-i-s-book-club-2-1-speaker-l');
  this.route('i-i-s-book-club-2-1-speaker-e',
  { path: 'i-i-s-book-club-2-1-speaker-e/:id' });
  this.route('i-i-s-book-club-2-1-speaker-e.new',
  { path: 'i-i-s-book-club-2-1-speaker-e/new' });
});

export default Router;
