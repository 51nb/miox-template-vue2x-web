import Router from 'miox-router';

import HomePage from '../webviews/home/index.vue';

const route = new Router();

route.patch('/', async ctx => await ctx.render(HomePage));

export default route;