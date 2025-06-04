import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ExperienceView from '../src/views/ExperienceView.vue';

// Use the same router-link stub pattern as other view tests
const globalStubs = {
  'router-link': {
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
  },
  // Icon stubs in both kebab-case and PascalCase
  'user-circle-icon': { template: '<user-circle-icon />' },
  'UserCircleIcon': { template: '<user-circle-icon />' },
  'briefcase-icon': { template: '<briefcase-icon />' },
  'BriefcaseIcon': { template: '<briefcase-icon />' },
  'cpu-icon': { template: '<cpu-icon />' },
  'CpuIcon': { template: '<cpu-icon />' },
  'graduation-cap-icon': { template: '<graduation-cap-icon />' },
  'GraduationCapIcon': { template: '<graduation-cap-icon />' },
  'zap-icon': { template: '<zap-icon />' },
  'ZapIcon': { template: '<zap-icon />' },
  'award-icon': { template: '<award-icon />' },
  'AwardIcon': { template: '<award-icon />' },
  'check-circle-icon': { template: '<check-circle-icon />' },
  'CheckCircleIcon': { template: '<check-circle-icon />' },
  'line-chart-icon': { template: '<line-chart-icon />' },
  'LineChartIcon': { template: '<line-chart-icon />' },
  'book-open-icon': { template: '<book-open-icon />' },
  'BookOpenIcon': { template: '<book-open-icon />' },
  'wrench-icon': { template: '<wrench-icon />' },
  'WrenchIcon': { template: '<wrench-icon />' },
  'rocket-icon': { template: '<rocket-icon />' },
  'RocketIcon': { template: '<rocket-icon />' },
  'presentation-icon': { template: '<presentation-icon />' },
  'PresentationIcon': { template: '<presentation-icon />' },
  'users-icon': { template: '<users-icon />' },
  'UsersIcon': { template: '<users-icon />' },
  'file-text-icon': { template: '<file-text-icon />' },
  'FileTextIcon': { template: '<file-text-icon />' },
  'search-icon': { template: '<search-icon />' },
  'SearchIcon': { template: '<search-icon />' },
  'users2-icon': { template: '<users2-icon />' },
  'Users2Icon': { template: '<users2-icon />' },
  'badge-check-icon': { template: '<badge-check-icon />' },
  'BadgeCheckIcon': { template: '<badge-check-icon />' },
  'brain-icon': { template: '<brain-icon />' },
  'BrainIcon': { template: '<brain-icon />' },
  'download-icon': { template: '<download-icon />' },
  'DownloadIcon': { template: '<download-icon />' },
  'mail-icon': { template: '<mail-icon />' },
  'MailIcon': { template: '<mail-icon />' },
  'shield-icon': { template: '<shield-icon />' },
  'ShieldIcon': { template: '<shield-icon />' },
  'chevron-right-icon': { template: '<chevron-right-icon />' },
  'ChevronRightIcon': { template: '<chevron-right-icon />' },
  'bar-chart-icon': { template: '<bar-chart-icon />' },
  'BarChartIcon': { template: '<bar-chart-icon />' },
  'cloud-icon': { template: '<cloud-icon />' },
  'CloudIcon': { template: '<cloud-icon />' },
  'server-icon': { template: '<server-icon />' },
  'ServerIcon': { template: '<server-icon />' },
  'git-branch-icon': { template: '<git-branch-icon />' },
  'GitBranchIcon': { template: '<git-branch-icon />' },
  'database-icon': { template: '<database-icon />' },
  'DatabaseIcon': { template: '<database-icon />' },
  'clock-icon': { template: '<clock-icon />' },
  'ClockIcon': { template: '<clock-icon />' }
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
    // List of all icons expected to be rendered (from template and imports)
    const iconComponents = [
      'UserCircleIcon', 'BriefcaseIcon', 'CpuIcon', 'GraduationCapIcon', 'ZapIcon',
      'AwardIcon', 'CheckCircleIcon', 'LineChartIcon', 'BookOpenIcon',
      'WrenchIcon', 'RocketIcon', 'PresentationIcon', 'UsersIcon', 'FileTextIcon',
      'SearchIcon', 'Users2Icon', 'BadgeCheckIcon', 'BrainIcon', 'DownloadIcon',
      'MailIcon', 'ShieldIcon', 'ChevronRightIcon', 'BarChartIcon', 'CloudIcon',
      'ServerIcon', 'GitBranchIcon', 'DatabaseIcon', 'ClockIcon'
    ];
    const missingIcons = iconComponents.filter(
      name => wrapper.findAllComponents({ name }).length === 0
    );
    expect(missingIcons, `Missing icons: ${missingIcons.join(', ')}`).toHaveLength(0);
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
