# line break ways

-> By innerHTML 

    - html file
    <div class="alert alert-danger" [innerHTML]="errorString" *ngIf="errorString"></div>
    - ts file
      errorString;
      //to validate product name
    if (!productName) {
      this.errorString +=
        "- Product Name is required and Product Name is required. <br>";
    }
    //to validate product rate
    if (!productRate) {
      this.errorString +=
        "- Product Name is required and Product Name is required. <br>";
    }
    
    note:errorString: string = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
    
-> By CSS

    - html file
    <div class="alert alert-danger"  id="formatted" *ngIf="errorString">
      {{ errorString }}
    </div>
    -ts file
    //to validate product name
    if (!productName) {
      this.errorString +=
        "- Product Name is required and Product Name is required. \n";
    }
    //to validate product rate
    if (!productRate) {
      this.errorString +=
        "- Product Name is required and Product Name is required. \n";
    }


# valiadtion ways of Null, Undefined, '', ' '

  <h1>Name: {{ name ? name : 'default' }}</h1>
 
  <h1>Name: {{ name === null || name === '' || name === undefined ? 'default' : name }} </h1>

  <h3>{{ name || 'default' }}</h3>

