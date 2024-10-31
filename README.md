# Review 9

## Instructions

- Fork this `review-9` repository.
- For Task 1: setup an `index.html`, a linked stylesheet named `index.css` and a linked JavaScript file named `index.js`.
- For Task 2: create a new `answers.md` file with your answers.

## Project Brief

For this review, you have two tasks: making a simple app, and flexing your product management knowledge.

Example interface:
![](./review-9.png)

## Task 1 (30 points)

Make a simple app that allows the user to preview colors.

### Acceptance Criteria

1. Has a text field to enter any acceptable CSS color
2. Can click a button to set the color from the text field as the background color of the box on the bottom.
3. Can click a button to apply a random color from the following array:
   ```js
   const randomColors = [
     '#FFB17A',
     '#0A1128',
     '#BEE7B8',
     '#713E5A',
     '#0B4F6C',
     '#20BF55'
   ];
   ```

   <details>
     <summary>Hint</summary>
     To access a random element of an array, you can use `Math.random()` to generate an index. Example:

     ```js
      const array = ['a', 'b', 'c'];
      const randomIndex = Math.floor(Math.random() * array.length - 1);
      console.log(array[randomIndex]); // Will print either 'a', 'b', or 'c'
     ```
   </details>

### Extra Credit

Remove the apply button and have the changes displayed live as the user types into the text field. Use [the 'input' event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) to make this happen.

## Task 2 (20 points)

Invent a new function of this app and write a user story & acceptance criteria for it. You do not actually need to implement the function in JavaScript. Make sure you use appropriate wording for the user story.

## Task 3 (10 points)

Name something you took away from David Downs' talk this morning.

## Grading Key

60 points available across both tasks + 10 points extra credit.

- max 30 points for fulfilling all acceptance criteria in Task 1
- max 10 points available as extra credit in Task 1
- max 10 points for using proper wording for the user story in Task 2
- max 10 points for writing at least 1 reasonable acceptance criterion
- 20 points for miscellaneous:
  - proper formatting
  - sensible comments
  - no unnecessary repetition
  - more than 1 commit
  - good answer to Task 3

### Tau kē and good luck!
