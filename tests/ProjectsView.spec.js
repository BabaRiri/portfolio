import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ProjectsView from '../src/views/ProjectsView.vue';

// Use the same router-link stub pattern as HomeView
const globalStubs = {
  'router-link': {
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
  },
};

describe('ProjectsView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProjectsView, {
      global: {
        stubs: globalStubs,
      },
    });
  });

  it('renders the header and intro text', () => {
    expect(wrapper.text()).toContain('Projects Portfolio');
    expect(wrapper.text()).toContain('A showcase of my development work');
  });

  it('renders filter buttons and toggles active state', async () => {
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBeGreaterThan(0);
    await buttons[2].trigger('click');
    expect(buttons[2].classes()).toContain('bg-primary');
  });

  it('renders all project cards', () => {
    const cards = wrapper.findAll('.group');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('applies filtering logic correctly', async () => {
    const pythonBtn = wrapper.findAll('button').find(b => b.text().toLowerCase().includes('python'));
    await pythonBtn.trigger('click');
    const cards = wrapper.findAll('.group');
    // All visible cards should have python in their technologies or tags
    cards.forEach(card => {
      expect(card.text().toLowerCase()).toMatch(/python/);
    });
  });

  it('displays tech stack, tags, and business impact', () => {
    const card = wrapper.find('.group');
    expect(card.text()).toMatch(/impact|roi|users|clients|auditors/i);
    expect(card.html()).toMatch(/bg-gray-100|dark:bg-gray-800/);
  });

  it('handles image load errors with fallback', async () => {
    const img = wrapper.find('img');
    await img.trigger('error');
    expect(img.attributes('src')).toMatch(/^data:image\/svg/);
  });

  it('renders navigation links as anchor tags', () => {
    const anchors = wrapper.findAll('a[href]');
    expect(anchors.length).toBeGreaterThanOrEqual(1);
  });

  it('should be accessible: all buttons and links have labels or text', () => {
    const buttons = wrapper.findAll('button');
    buttons.forEach(btn => {
      expect(btn.attributes('aria-label') || btn.text().length > 0).toBeTruthy();
    });
    const anchors = wrapper.findAll('a');
    anchors.forEach(a => {
      expect(a.text().length > 0).toBeTruthy();
    });
  });

  it('handles empty state gracefully', async () => {
    // Simulate filter that yields no projects
    wrapper.vm.filterCategory = 'nonexistent';
    await wrapper.vm.$nextTick();
    const cards = wrapper.findAll('.group');
    expect(cards.length).toBe(0);
    // Optionally check for empty state message if present
    // expect(wrapper.text()).toContain('No projects found');
  });
});
