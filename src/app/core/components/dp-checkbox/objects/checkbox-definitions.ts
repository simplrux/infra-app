export interface ICheckboxDefinitions {
    binary?: boolean;
    disabled?: boolean;
}

export class CheckboxDefinitions implements ICheckboxDefinitions {
    binary: boolean;
    disabled: boolean;
    constructor(params: ICheckboxDefinitions) {
        this.binary = (params.binary == null ? true : params.binary);
        this.disabled = (params.disabled == null ? false : params.disabled);
    }
}

