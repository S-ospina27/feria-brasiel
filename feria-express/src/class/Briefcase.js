class Briefcase {
  constructor() {
    this.idbriefcase = null;
    this.briefcase_name = null;
    this.briefcase_photo = null;
    this.briefcasecol_description = null;
  }

  setIdbriefcase(idbriefcase) {
    this.idbriefcase = idbriefcase;
  }

  setBriefcase_name(briefcase_name) {
    this.briefcase_name = briefcase_name;
  }

  setBriefcase_photo(briefcase_photo) {
    this.briefcase_photo = briefcase_photo;
  }
  setBriefcasecol_description(briefcasecol_description) {
    this.briefcasecol_description = briefcasecol_description;
  }

  getIdbriefcase() {
    return this.idbriefcase;
  }

  getBriefcase_name() {
    return this.briefcase_name;
  }

  getBriefcase_photo() {
    return this.briefcase_photo;
  }
  getBriefcasecol_description() {
    return this.briefcasecol_description;
  }

  static formFields(datos) {
    const briefcase = new Briefcase();
    briefcase.setIdbriefcase(
      [null, undefined].includes(datos.idbriefcase) ? null : datos.idbriefcase
    );
    briefcase.setBriefcase_name(
      [null, undefined].includes(datos.briefcase_name)
        ? null
        : datos.briefcase_name
    );
    briefcase.setBriefcase_photo(
      [null, undefined].includes(datos.briefcase_photo)
        ? null
        : datos.briefcase_photo
    );

    briefcase.setBriefcasecol_description(
      [null, undefined].includes(datos.briefcasecol_description)
        ? null
        : datos.briefcasecol_description
    );
    return briefcase;
  }
}

export default Briefcase;
