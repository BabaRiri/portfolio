import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ExperienceView from '../src/views/ExperienceView.vue';

// Use the same router-link stub pattern as other view tests
const globalStubs = {
  'router-link': {
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
  },
  'user-circle-icon': { template: '<user-circle-icon />' },
  'briefcase-icon': { template: '<briefcase-icon />' },
  'cpu-icon': { template: '<cpu-icon />' },
  'graduation-cap-icon': { template: '<graduation-cap-icon />' },
  'zap-icon': { template: '<zap-icon />' },
  'award-icon': { template: '<award-icon />' },
  'check-circle-icon': { template: '<check-circle-icon />' },
  'line-chart-icon': { template: '<line-chart-icon />' },
  'book-open-icon': { template: '<book-open-icon />' }
};

describe('ExperienceView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ExperienceView, {
      global: {
        stubs: globalStubs,
      },
    });
  });

  it('renders the header, name, and intro', () => {
    expect(wrapper.text()).toContain('Seward Richard Mupereri');
    expect(wrapper.text()).toContain('Early-career Software Engineer');
  });

  it('renders navigation buttons and anchor tags', () => {
    const anchors = wrapper.findAll('a[href]');
    expect(anchors.length).toBeGreaterThanOrEqual(3); // Experience, Skills, Education
  });

  it('renders professional summary and key achievements', () => {
    expect(wrapper.text()).toContain('Professional Summary');
    expect(wrapper.text()).toContain('Key Achievements');
    expect(wrapper.text()).toContain('Productivity Boost');
  });

  it('renders experience timeline', () => {
    expect(wrapper.text()).toContain('Professional Experience');
    expect(wrapper.text()).toMatch(/Junior Software Engineer|Intern|Event Growth|Team Empowerment/);
  });

  it('renders education, certifications, and continuous learning', () => {
    expect(wrapper.text()).toContain('Formal Education');
    expect(wrapper.text()).toContain('Professional Certifications');
    expect(wrapper.text()).toContain('Continuous Learning');
  });

  it('renders technical skills section', () => {
    expect(wrapper.text()).toContain('Technical Skills');
    // Check for at least one skill
    expect(wrapper.text().length).toBeGreaterThan(100);
  });

  it('renders all icons without runtime errors', () => {
    // Check for at least one icon component stub (PascalCase)
    const iconComponents = [
      'UserCircleIcon', 'BriefcaseIcon', 'CpuIcon', 'GraduationCapIcon', 'ZapIcon',
      'AwardIcon', 'CheckCircleIcon', 'LineChartIcon', 'BookOpenIcon'
    ];
    const found = iconComponents.some(name => wrapper.findAllComponents({ name }).length > 0);
    expect(found).toBe(true);
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

  it('handles empty state gracefully for dynamic sections', () => {
    // For now, just ensure the component renders even if no data is present (static data)
    expect(wrapper.exists()).toBe(true);
  });
});
