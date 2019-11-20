import wasm from '../../dist/tmp/pluto99.wasm';

const imports = {};

export default wasm({ imports }).then(({ instance }) => {
  return (jd = 2451545) => {
    return {
      x: instance.exports.pluto_x(jd),
      y: instance.exports.pluto_y(jd),
      z: instance.exports.pluto_z(jd),
    };
  };
});
