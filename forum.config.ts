import { describe, expect, it } from 'vitest';
import forumConfig from '../forum.config.js';
import { resolveConfig } from '../src/lib/config/resolve';

describe('resolved config', () => {
  it('merges the root forum.config.ts over defaults', () => {
    expect(forumConfig.repo.owner).toBe('yizhikulipa');
    expect(forumConfig.repo.name).toBe('discussion-kit');
    expect(forumConfig.site.name).toBe('我的论坛');
  });

  it('is not incomplete when a repo is configured', () => {
    const config = resolveConfig();
    const incomplete = !config.repo.owner || !config.repo.name;
    expect(incomplete).toBe(false);
  });

  it('compiles theme overrides (none in the root config)', () => {
    expect(forumConfig.theme).toBeDefined();
  });
});
