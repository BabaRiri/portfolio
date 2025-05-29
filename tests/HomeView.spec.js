import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../src/views/HomeView.vue';

// Mock router-link for isolation
const globalStubs = {
  'router-link': {
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
  },
};

describe('HomeView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(HomeView, {
      global: {
        stubs: globalStubs,
      },
    });
  });

  it('renders hero section with name and bio', () => {
    expect(wrapper.text()).toContain('Seward Richard Mupereri');
    expect(wrapper.text()).toContain('Software Engineer | Automation Engineer | Web Developer');
  });

  it('renders all featured projects', () => {
    const projectCards = wrapper.findAll('.group');
    expect(projectCards.length).toBeGreaterThan(0);
    expect(wrapper.text()).toContain('Featured Projects');
  });

  it('renders CTA section', () => {
    expect(wrapper.text()).toContain('Interested in Working Together?');
    expect(wrapper.text()).toContain('Get in Touch');
  });

  it('Download CV button is accessible', () => {
    const btn = wrapper.find('button[aria-label="Download CV as PDF"]');
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toMatch(/Download CV/i);
  });

  it('simulates Download CV click and handles missing file', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false }));
    window.alert = vi.fn();
    const btn = wrapper.find('button[aria-label="Download CV as PDF"]');
    await btn.trigger('click');
    expect(window.alert).toHaveBeenCalledWith(
      'Resume file not found. Please ensure resume.pdf is in the public/ folder.'
    );
  });

  it('renders navigation links as anchor tags', () => {
    // Check for anchor tags with href that look like navigation
    const anchors = wrapper.findAll('a[href]');
    // Expect at least 1 navigation link (View Projects)
    expect(anchors.length).toBeGreaterThanOrEqual(1);
    // Optionally check hrefs for known routes
    const hrefs = anchors.map(a => a.attributes('href'));
    expect(hrefs).toContain('/projects');
  });

  it('renders profile image with correct src', () => {
    const img = wrapper.find('img[alt="Seward Richard Mupereri"]');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('/profile-placeholder.png');
  });

  it('project cards display tech stack and tags', () => {
    const techChips = wrapper.findAll('.bg-gray-100, .dark\\:bg-gray-800');
    expect(techChips.length).toBeGreaterThan(0);
  });

  it('should be accessible: all buttons and links have labels', () => {
    const buttons = wrapper.findAll('button');
    buttons.forEach((btn) => {
      expect(btn.attributes('aria-label') || btn.text().length > 0).toBeTruthy();
    });
  });
});
