# Changelog

## 0.1.0 (2025-05-01)

Full Changelog: [v0.1.0-rc.2...v0.1.0](https://github.com/knocklabs/knock-mgmt-node/compare/v0.1.0-rc.2...v0.1.0)

### Chores

* configure new SDK language ([3d7f4c3](https://github.com/knocklabs/knock-mgmt-node/commit/3d7f4c308d137c9be5a4c08c26584e3b6d76955f))
* **internal:** refactor utils ([80a60d8](https://github.com/knocklabs/knock-mgmt-node/commit/80a60d85153c1fed8e995b3e9488766214a8a1b5))
* update SDK settings ([d2efc1e](https://github.com/knocklabs/knock-mgmt-node/commit/d2efc1eb5abe156c72d963e0db4f98b7f0cc4952))


### Documentation

* **readme:** fix typo ([028631b](https://github.com/knocklabs/knock-mgmt-node/commit/028631bd09527a4415f5cf5040fa4caaebfedaaf))

## 0.1.0-rc.2 (2025-04-24)

Full Changelog: [v0.1.0-rc.1...v0.1.0-rc.2](https://github.com/knocklabs/knock-mgmt-node/compare/v0.1.0-rc.1...v0.1.0-rc.2)

### Features

* **api:** api update ([#15](https://github.com/knocklabs/knock-mgmt-node/issues/15)) ([0e479f2](https://github.com/knocklabs/knock-mgmt-node/commit/0e479f230e536365057e5694335209f6f3bba9bb))
* **api:** api update ([#19](https://github.com/knocklabs/knock-mgmt-node/issues/19)) ([b2544d8](https://github.com/knocklabs/knock-mgmt-node/commit/b2544d8b3f3802d1dd915bd34bf3d22e139a1579))
* **api:** api update ([#21](https://github.com/knocklabs/knock-mgmt-node/issues/21)) ([c31ebf0](https://github.com/knocklabs/knock-mgmt-node/commit/c31ebf0831bfe3f738a03d6275d95a74b9039335))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#17](https://github.com/knocklabs/knock-mgmt-node/issues/17)) ([cddd238](https://github.com/knocklabs/knock-mgmt-node/commit/cddd23869dfdb4711b6aa629301788bd93335624))
* **client:** send all configured auth headers ([#20](https://github.com/knocklabs/knock-mgmt-node/issues/20)) ([9f9f76a](https://github.com/knocklabs/knock-mgmt-node/commit/9f9f76a3877fda208abaf78ea3b54711ea20f567))
* **internal:** fix file uploads in node 18 jest ([3a6efc7](https://github.com/knocklabs/knock-mgmt-node/commit/3a6efc77e9c4facaa250d8e3e1afd70c5f3b206e))
* **mcp:** remove unused tools.ts ([#18](https://github.com/knocklabs/knock-mgmt-node/issues/18)) ([3f25e02](https://github.com/knocklabs/knock-mgmt-node/commit/3f25e0291ff1ffc9ce04c829639755f81301a7ee))


### Chores

* **ci:** add timeout thresholds for CI jobs ([802e621](https://github.com/knocklabs/knock-mgmt-node/commit/802e621b8f1947626ae88cc1d6ffcd9cb4071445))
* **ci:** only use depot for staging repos ([c8bac5e](https://github.com/knocklabs/knock-mgmt-node/commit/c8bac5ef14589b62f4867bdc583dee1192a14753))
* **client:** minor internal fixes ([b2d3402](https://github.com/knocklabs/knock-mgmt-node/commit/b2d340253991c5f2643b2780fc2d897a16ec0dd8))
* **internal:** codegen related update ([d8a00f3](https://github.com/knocklabs/knock-mgmt-node/commit/d8a00f368ebd0c296b640904b80857bbd46ce4a8))
* **internal:** improve node 18 shims ([5681aa0](https://github.com/knocklabs/knock-mgmt-node/commit/5681aa0c7a7ca3a79df65f019cf922d1b8e92398))
* **internal:** reduce CI branch coverage ([2b402bd](https://github.com/knocklabs/knock-mgmt-node/commit/2b402bd2be03525a7f7f12df15a4c1448b22cb9f))
* **internal:** upload builds and expand CI branch coverage ([7ed51bd](https://github.com/knocklabs/knock-mgmt-node/commit/7ed51bdeda54b8eea516f261c2533ded55d8a133))
* **perf:** faster base64 decoding ([3ade51a](https://github.com/knocklabs/knock-mgmt-node/commit/3ade51a92d62027c093325b5a98b77c18d65d46d))

## 0.1.0-rc.1 (2025-04-03)

Full Changelog: [v0.1.0-rc.0...v0.1.0-rc.1](https://github.com/knocklabs/knock-mgmt-node/compare/v0.1.0-rc.0...v0.1.0-rc.1)

### Features

* **api:** api update ([#11](https://github.com/knocklabs/knock-mgmt-node/issues/11)) ([d38b2bf](https://github.com/knocklabs/knock-mgmt-node/commit/d38b2bfe5693f9c9168aff784f17676390acedf4))
* **api:** update via SDK Studio ([#5](https://github.com/knocklabs/knock-mgmt-node/issues/5)) ([d10b22f](https://github.com/knocklabs/knock-mgmt-node/commit/d10b22f00eabc416fc0b73e1bd6962d021287da1))


### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#12](https://github.com/knocklabs/knock-mgmt-node/issues/12)) ([c8ef7b3](https://github.com/knocklabs/knock-mgmt-node/commit/c8ef7b35d636deb4f030c17c7b520dc0da90a55f))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#10](https://github.com/knocklabs/knock-mgmt-node/issues/10)) ([256733e](https://github.com/knocklabs/knock-mgmt-node/commit/256733e75320659cfec94abc0fde4773552f3db2))
* **exports:** cleaner resource index imports ([#8](https://github.com/knocklabs/knock-mgmt-node/issues/8)) ([436ca01](https://github.com/knocklabs/knock-mgmt-node/commit/436ca015d2dbf518c3a9580ddd0738d15ea53d99))
* **exports:** stop using path fallbacks ([#9](https://github.com/knocklabs/knock-mgmt-node/issues/9)) ([aa8d864](https://github.com/knocklabs/knock-mgmt-node/commit/aa8d864f7b599c4db61e645c09628dfdf970478c))
* **internal:** add aliases for Record and Array ([#13](https://github.com/knocklabs/knock-mgmt-node/issues/13)) ([18783d2](https://github.com/knocklabs/knock-mgmt-node/commit/18783d2ebeb078e1f8a8bbc4688ff90f07b85a8a))
* **internal:** minor client file refactoring ([#7](https://github.com/knocklabs/knock-mgmt-node/issues/7)) ([2310b01](https://github.com/knocklabs/knock-mgmt-node/commit/2310b01619160883af8457bbad15a494a9dbe908))

## 0.1.0-rc.0 (2025-03-18)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-rc.0](https://github.com/knocklabs/knock-mgmt-node/compare/v0.0.1-alpha.0...v0.1.0-rc.0)

### Features

* **api:** update via SDK Studio ([d1410fb](https://github.com/knocklabs/knock-mgmt-node/commit/d1410fbfde6e0f0989dbd292ba7f19477e139b73))
* **api:** update via SDK Studio ([79d089f](https://github.com/knocklabs/knock-mgmt-node/commit/79d089f605781f6295e89f285fbfa48f682f1e7d))
* **api:** update via SDK Studio ([d230540](https://github.com/knocklabs/knock-mgmt-node/commit/d2305407775716ee6d23b9b01ea06dbbc768dae1))
* **api:** update via SDK Studio ([c5b0cec](https://github.com/knocklabs/knock-mgmt-node/commit/c5b0cec2b59c1aad1cf1c1212d90e910b6638922))
* **api:** update via SDK Studio ([135a4d5](https://github.com/knocklabs/knock-mgmt-node/commit/135a4d5ca54846efcbae43f733685203b0dc2bcd))
* **api:** update via SDK Studio ([8731d38](https://github.com/knocklabs/knock-mgmt-node/commit/8731d38e820cf684b0da0e5f8a0eef54c5cf0e1a))


### Chores

* go live ([#1](https://github.com/knocklabs/knock-mgmt-node/issues/1)) ([8a7e8cb](https://github.com/knocklabs/knock-mgmt-node/commit/8a7e8cbf191806247998040ef3252ef7a11a4ba3))
* update SDK settings ([#3](https://github.com/knocklabs/knock-mgmt-node/issues/3)) ([d3cf5d0](https://github.com/knocklabs/knock-mgmt-node/commit/d3cf5d05fa80d56d25191eec1e409119922163d1))
