import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from './../../../store';
import Story from './Story';

@observer
class Stories extends Component {
  render() {
    return (
      <div>
        <div className="fba-search pure-form">
          <input placeholder="activity" onChange={e => store.story.search(e.target.value)} type="text" />
        </div>

        <div>
          {store.story.stories.map(story => <Story key={story.key} story={story} />)}
        </div>
      </div>
    );
  }
}

Stories.propTypes = {};
Stories.defaultProps = {};

export default Stories;
