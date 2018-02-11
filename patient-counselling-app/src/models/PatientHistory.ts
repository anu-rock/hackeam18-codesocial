import { Emotion, FaceAnalysisResp } from "./FaceAnalysisResp";

export interface PatientHistory{
    assessmentDate:number;
    faceAnalysisArr?:FaceAnalysisResp[];
}