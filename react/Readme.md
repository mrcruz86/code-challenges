## React

### The Challenge:

Here is a very basic react app. It lists some items. You can click to select, and change a filter.

You must update the app to:
- [ ] Fetch "source" filters remotely from `http://www.kiddom.co/content/types.json`
- [ ] Fetch items remotely from `http://www.kiddom.co/content.json?source=${key}` based on the selected filter

This is a live coding exercise, not a take-home.

Please make sure you discuss your current level of familiarity with React with your interviewer before starting. If you say you're an expert, we'll expect you to be Googling different things than if you say you've only ever used Angular / Ember.


### Solution:

Define the new state object

        {
          filterState: {
            isFetching: false,
            filters: {}
          },
          itemState: {
            isFetching: false,
            items: []
          }
          activeFilter: null
        }

Add new actions for remote requests

- REQUEST_FILTERS
- getFilters (requires thunk middleware and isomorphic-fetch for remote requests)
- RECEIVE_FILTERS
- REQUEST_ITEMS
- getItems (requires thunk middleware and isomorphic-fetch for remote requests)
- RECEIVE_ITEMS

Adjust the components to use the new set of data based on the new state object
