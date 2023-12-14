class question {
  #id;
  #text;
  #options;
  #correctOption;

  constructor(questionToCreate) {
    this.#id = questionToCreate.id;
    this.#text = questionToCreate.text;
    this.#options = questionToCreate.options;
    this.#correctOption = questionToCreate.correctOption;
  }

  get id() {
    return this.#id;
  }

  get text() {
    return this.#text;
  }

  get options() {
    return this.#options;
  }

  get correctOption() {
    return this.correctOption;
  }

  toJSON(key) {
    console.log(key);
    return { id: this.#id, text: this.#text };
  }
}

module.exports = question;
