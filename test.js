import test from 'ava';
import learnUseSemanticReleaseCli from '.';

test('title', t => {
	t.throws(() => {
		learnUseSemanticReleaseCli(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(learnUseSemanticReleaseCli('unicorns'), 'unicorns & rainbows');
});
