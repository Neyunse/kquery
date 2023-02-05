import Remote from "../remote/index"

class Kquery {
      /**
       * The constructor function takes in an element and assigns it to the elements property of the
       * object.
       * @param elements - The elements to be added to the array.
       */
      constructor(elements) {
            
            this.elements = [elements]
          
      }

      /**
       * If the DOM is ready, run the function, otherwise wait until it is ready and then run the
       * function.
       * @param fn - The function to be executed when the DOM is ready.
       * @returns The function fn is being returned.
       */
      load(fn) {
            document.addEventListener('DOMContentLoaded', fn)
            return this
      }

      /**
       * It returns a NodeList of all the elements that match the selector.
       * @returns The elements that are being returned are the elements that are being selected by the
       * querySelectorAll method.
       */
      getElements() {
            const el = document.querySelectorAll(this.elements)
            return el
      }

      /**
       * The function getElement() is a method of the class ElementHandler. It returns the element that
       * is selected by the querySelector() method
       * @returns The element that is being selected.
       */
      getElement() {
            const el = document.querySelector(this.elements)
            return el
      }


      /**
       * The event function takes two arguments, the first being the event type and the second being
       * the callback function. The event function then returns the event listener.
       * @param event - The event you want to listen for.
       * @param callback - The function to be called when the event is triggered.
       * @returns The event listener.
       */
      event(event, callback) {
            this.getElements().forEach(el => el.addEventListener(event, callback))
            return this
      }
      
      /**
       * It returns a new Remote object.
       * @param url - The URL of the API.
       * @returns A new instance of the Remote class.
       */
      remote(url) {
            return new Remote(url)
      }

      /**
       * The function takes a string of HTML as an argument, and inserts it into the innerHTML of each
       * element in the collection.
       * @param html - The HTML to insert.
       * @returns the value of the variable ins.
       */
      insertHTML(html) {
            this.getElements().forEach(el => el.innerHTML += html)
            return this
      }

      /**
       * The function takes a boolean as an argument and returns a boolean.
       * @param boolean - true or false
       * @returns The return value is the result of the forEach method.
       */
      disableElement(boolean) {
            this.getElements().forEach(el => el.disabled = boolean )
            return this
      }

      /**
       * It adds a class to the element.
       * @param className - The class name to add to the element.
       */
      addClass(className) {
            this.getElement().classList.add(className)
            return this
            
      }

      /**
       * The function removes a class from the element.
       * @param className - The class name to be removed from the element.
       */
      removeClass(className) {
            this.getElement().classList.remove(className)
            return this
      }

      /**
       * This function replaces the class name of the element with the new class name
       * @param className - The class name to be replaced.
       * @param newClassName - The new class name to replace the old one with.
       */
      replaceClass(className, newClassName) {
            this.getElement().classList.replace(className, newClassName)
            return this
      }

      /**
       * This function returns the dataset of the element.
       * @returns The dataset property of the element.
       */
      getDataSet() {
            return this.getElement().dataset
      }

      /**
       * For each element in the array of elements, return the dataset of that element.
       * @returns An array of objects.
       * @buged Return undefined
       */
      getDataSets() {
            return this.getElements().forEach(el => el.dataset )
      }

      /**
       * It removes all the children of the element.
       * @returns null.
       */
      removeChildrens() {
            this.getElement().innerHTML = ""
            return this
      }

     
      /**
       * This function returns true if the element has the class, and false if it doesn't.
       * @param str - The class name to check for.
       * @returns The return value is a boolean value.
       */
      hasClass(str) {
            return this.getElement().classList.contains(str);
      }
}

export default Kquery