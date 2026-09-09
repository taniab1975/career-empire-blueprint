# Campus modular kit v0.1 — review candidate

CE-ENV-KIT-01 / CE-CHANGE-20260910-23, 10 September 2026.
14 separate GLB modules plus a facade join specimen. Use metres; GLB Y-up/front +Z. See kit-manifest.json for each pivot, actual dimensions, hashes and triangles. Do not apply the legacy Studio rotation blindly.

Stone and timber use authored 512px basecolor, roughness and normal maps; paving-original.png is the existing project 1024px texture reused unchanged. All GLB textures are embedded; texture files are supplied for editing. Satin navy and clear transmissive glass are PBR materials. 6,736 triangles across unique modules. The combined specimen repeats modules; it is not the full Studio.

Join rules: facade widths snap end-to-end on X; use 2m bays and a 1m wall/fin option. Module origins are ground-centre unless the manifest says otherwise. Canopy underside is3.02m: place it Z=-.02 in Blender (Y=-.02 in GLB) to meet3m posts, as demonstrated. Paving face is0. Ramp low edge0/high edge.08; repeat along Blender+Y with2m run and.08 rise. Three segments span6m/rise.24; landing top.24. This is geometry, not accessibility certification. Entry has1.76m clear width and2.88m height without a door leaf; collision and interaction must be deliberately implemented during Studio integration.

Editable packed campus-kit.blend and deterministic build/check scripts are retained in the canonical private source. Existing concept originals, wardrobe and live game are unchanged.

Validation: all14 exports reimported; UVs/normals, measured dimensions, window transmission, open entry and ramp endpoints checked. Initial blank maps were rejected and corrected; final Blender render and desktop/mobile Three.js captures reviewed. Browser smoke passes; headless rendering FPS is not a school-device benchmark. No navmesh/collision, full Studio, precinct or classroom acceptance is claimed.

Next: Tania reviews the material/part family. Resolve any kit changes, then assemble the complete Avatar Studio as the next distinct stage. Gardens, path/plaza assembly and device review follow separately. Blazer paused.
