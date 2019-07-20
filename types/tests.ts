// Forked from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/doctrine/doctrine-tests.ts
// Originally defined by: rictic <https://github.com/rictic>

import * as doctrine from '.';

let string: string = 'string';
let strings: string[];
let tags: doctrine.Tag[] = [];
let annotation: doctrine.Annotation;

annotation = doctrine.parse(string);
string = annotation.description;
tags = annotation.tags;

annotation = doctrine.parse(string, {});
annotation = doctrine.parse(string, {
  unwrap: true,
  tags: ['foo', 'bar', 'baz'],
  recoverable: false,
  sloppy: false,
  strict: true,
  preserveWhitespace: false,
  lineNumbers: true
});

tags.forEach((tag) => {
  string = doctrine.type.stringify({type: 'NullableLiteral'});
  string = tag.title;
  string = tag.description || '';
  string = tag.kind || '';
  string = tag.name || '';
  strings = tag.errors || [];
  if (tag.type && tag.type.type === 'NameExpression') {
    string = tag.type.name;
  }
});

string = doctrine.unwrapComment(string);
