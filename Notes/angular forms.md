# Forms

angular procides two different ways to collect and validate data from user.

1. Template-Driven Form
    - In this all work should be done in template, that's why it's called template driven form
3. Model-Driven Form (Reactive Form)
    - big form and more validation , at that time we prefer this 
   
   
## Template-driven form
  
  - Import FormsModule in add.module.ts
  - suitable for simple scenarios and fail for complex scenarios
  
  Note: use both in same application
  
  
## Reactive form

   ### -> By FormBuilder
    
    form: FormGroup;
    constructor(public fb: FormBuilder) {}

    ngOnInit() {
     this.initializeForm();
    }

    initializeForm() {
        this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
        });
    }

    get _form() {
     return this.form.controls;
    }
  
   ### -> By FormGroup
     form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    passwoed: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
  });
  
  get username(){
    return this.form.get('username');
   }
<!--    or -->
   get _form() {
     return this.form.controls;
    }
   
  ### Custom Validator
  
  #### sync validator
  static cannotConatinSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as String).indexOf(' ') >= 0)
      return { cannotConatinSpace: true };

    return null;
  }

  #### async validator
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'mosh') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
  
  ##### Note: async validators in different array
  form = new FormGroup({
    username: new FormControl(
      '',
      [ Validators.required , Usernamevalidatirs.cannotConatinSpace,],
      Usernamevalidatirs.shouldBeUnique
    ),
    password: new FormControl('', Validators.required),
  });
