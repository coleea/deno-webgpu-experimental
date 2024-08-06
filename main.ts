export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

const adapter = await navigator.gpu.requestAdapter();
if (adapter) {
  // Print out some basic details about the adapter.
  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(`Found adapter: ${adapterInfo.device}`); // On some systems this will be blank
  console.log('adapterInfo');
  console.log(adapterInfo.architecture);
  console.log(adapterInfo.description);
  console.log(adapterInfo.device);
  console.log(adapterInfo.vendor);
  
  const features = [...adapter.features.values()];
  console.log(`Supported features: ${features.join(", ")}`);
} else {
  console.error("No adapter found");
}
