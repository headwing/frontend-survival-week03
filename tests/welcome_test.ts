Feature('Welcome');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');

  I.seeElement('//img[@alt="Test"]');
});
