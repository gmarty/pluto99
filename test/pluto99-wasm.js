const assert = require('assert');
const pluto99Loader = require('../dist/pluto99-wasm');

const PRECISION = 6;

describe('pluto99Loader()', () => {
  let pluto99;
  before(async () => {
    try {
      pluto99 = await pluto99Loader;
    } catch (e) {
      console.error(e);
    }
  });

  it('should return expected values for Julian day 807932.5', () => {
    const pluto = pluto99(807932.5);
    assert.equal(pluto.x.toFixed(PRECISION), -24.450898);
    assert.equal(pluto.y.toFixed(PRECISION), 27.864841);
    assert.equal(pluto.z.toFixed(PRECISION), 4.020151);
  });

  it('should return expected values for Julian day 990557.5', () => {
    const pluto = pluto99(990557.5);
    assert.equal(pluto.x.toFixed(PRECISION), -28.090595);
    assert.equal(pluto.y.toFixed(PRECISION), 20.600908);
    assert.equal(pluto.z.toFixed(PRECISION), 5.869147);
  });

  it('should return expected values for Julian day 1173182.5', () => {
    const pluto = pluto99(1173182.5);
    assert.equal(pluto.x.toFixed(PRECISION), -30.166984);
    assert.equal(pluto.y.toFixed(PRECISION), 12.762686);
    assert.equal(pluto.z.toFixed(PRECISION), 7.327759);
  });

  it('should return expected values for Julian day 1355807.5', () => {
    const pluto = pluto99(1355807.5);
    assert.equal(pluto.x.toFixed(PRECISION), -30.612416);
    assert.equal(pluto.y.toFixed(PRECISION), 4.70315);
    assert.equal(pluto.z.toFixed(PRECISION), 8.334771);
  });

  it('should return expected values for Julian day 1538432.5', () => {
    const pluto = pluto99(1538432.5);
    assert.equal(pluto.x.toFixed(PRECISION), -29.447885);
    assert.equal(pluto.y.toFixed(PRECISION), -3.154766);
    assert.equal(pluto.z.toFixed(PRECISION), 8.849075);
  });

  it('should return expected values for Julian day 1721057.5', () => {
    const pluto = pluto99(1721057.5);
    assert.equal(pluto.x.toFixed(PRECISION), -26.904668);
    assert.equal(pluto.y.toFixed(PRECISION), -10.265583);
    assert.equal(pluto.z.toFixed(PRECISION), 8.881072);
  });

  it('should return expected values for Julian day 1903682.5', () => {
    const pluto = pluto99(1903682.5);
    assert.equal(pluto.x.toFixed(PRECISION), -23.346605);
    assert.equal(pluto.y.toFixed(PRECISION), -16.332474);
    assert.equal(pluto.z.toFixed(PRECISION), 8.505363);
  });

  it('should return expected values for Julian day 2086307.5', () => {
    const pluto = pluto99(2086307.5);
    assert.equal(pluto.x.toFixed(PRECISION), -19.112797);
    assert.equal(pluto.y.toFixed(PRECISION), -21.288876);
    assert.equal(pluto.z.toFixed(PRECISION), 7.813304);
  });

  it('should return expected values for Julian day 2268932.5', () => {
    const pluto = pluto99(2268932.5);
    assert.equal(pluto.x.toFixed(PRECISION), -14.504729);
    assert.equal(pluto.y.toFixed(PRECISION), -25.154226);
    assert.equal(pluto.z.toFixed(PRECISION), 6.893533);
  });

  it('should return expected values for Julian day 2451557.5', () => {
    const pluto = pluto99(2451557.5);
    assert.equal(pluto.x.toFixed(PRECISION), -9.83748);
    assert.equal(pluto.y.toFixed(PRECISION), -27.977994);
    assert.equal(pluto.z.toFixed(PRECISION), 5.841542);
  });

  it('should return expected values for Julian day 2634182.5', () => {
    const pluto = pluto99(2634182.5);
    assert.equal(pluto.x.toFixed(PRECISION), -5.418324);
    assert.equal(pluto.y.toFixed(PRECISION), -29.873589);
    assert.equal(pluto.z.toFixed(PRECISION), 4.75852);
  });
});
