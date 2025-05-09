// views.js

class View {
  constructor(data) {
    this.data = data || {};
  }

  updateFrom(newData) {
    if (typeof newData !== 'object' || newData === null) {
      throw new Error('Invalid data provided to updateFrom');
    }
    // Merge newData properties into this.data
    Object.assign(this.data, newData);
  }

  render() {
    // Simulate rendering the view with current data
    console.log('Rendering view with data:', this.data);
  }
}

// Example function to create and update a view
function pollAndUpdateView(view, pollData) {
  try {
    view.updateFrom(pollData);
    view.render();
  } catch (error) {
    console.error('Failed to update view:', error.message);
  }
}

module.exports = {
  View,
  pollAndUpdateView,
};
