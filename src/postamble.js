
// === Auto-generated postamble setup entry stuff ===

function run(args) {
  __initializeRuntime__();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < QUANTUM_SIZE-1; i++) {
      argv.push(0);
    }
  }
  var argv = [Pointer_make(intArrayFromString("/bin/this.program"), null) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(Pointer_make(intArrayFromString(args[i]), null));
    pad();
  }
  argv = Pointer_make(argv, null);

  __globalConstructor__();

  _main(argc, argv);

  while( __ATEXIT__.length > 0) {
    var func = __ATEXIT__.pop();
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func();
  }
}

try {
  run(this.arguments ? arguments : []);
} catch (e) {
  print("Fatal exception: " + e);
  throw e;
}

