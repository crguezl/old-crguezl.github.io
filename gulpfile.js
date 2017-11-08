const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook build',                // build HTML in _book
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 
      'git add .',
      'git ci -am "new version"', // commit changes
      'git push origin master'    // push changes to github repo
    ]
  )
);

gulp.task('ghrepo', shell.task( // Open a browser in the github book repo
  'hub browse crguezl.github.io'
));

gulp.task('apuntes', shell.task( // Open web browser in the github deployment of this book
  'open https://crguezl.github.io/_book'
));

gulp.task("pre-install", shell.task([ // global dependencies
      "npm i -g gitbook-cli",
			"brew install hub"
]));

gulp.task("push", shell.task([ // add changes and push to github 
      'git add . && git ci -am "new version" && git push origin master',
]));


