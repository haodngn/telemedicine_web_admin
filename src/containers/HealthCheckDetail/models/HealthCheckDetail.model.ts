import { Disease } from "src/containers/DiseaseManagemenent/models/Disease.model";
import { DrugType } from "src/containers/DrugTypeManagement/models/DrugType.models";
import { Patient } from "src/containers/PatientManagement/models/Patient.model";
import { Symptom } from "src/containers/SymptomManagement/models/Symptom.model";

export type HealthCheck = {
    id?: number;
    height: number;
    weight: number;
    reasonCancel: string;
    rating: number;
    comment: string;
    advice: string;
    token: string;
    patientId: number;
    createdTime: string;
    canceledTime: string;
    patient: Patient;
    healthCheckDiseases: HealthCheckDiseases[];
    prescriptions: Prescriptions[];
    slot: Slots[];
    symptomHealthChecks: SymptomHealthChecks[];
};

export type HealthCheckDiseases = {
    id?: number;
    healthCheckId?: number;
    diseaseId?: number;
    disease: Disease;
};

export type Prescriptions = {
    id?: number;
    name: string;
    producer: string;
    drugOrigin: string;
    drugForm: string;
    drugType: DrugType;
    drugTypeId: number;
};

export type Slots = {
    id?: number;
    assignedDate: string;
    doctorId?: string;
    startTime: string;
    endTime: string;
};

export type SymptomHealthChecks = {
    id?: number;
    symptomId?: number;
    healthCheckId?: number;
    evidence: string;
    symptom: Symptom;
};
