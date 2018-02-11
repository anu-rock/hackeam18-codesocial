/**
 * Face API response Model
 */
export interface FaceAnalysisResp {
    faceId: string;
    faceRectangle: FaceRectangle;
    faceAttributes: FaceAttributes;
}

interface FaceAttributes {
    age: number;
    gender: string;
    smile: number;
    glasses: string;
    emotion: Emotion;
}
interface FaceRectangle {
    width: number;
    height: number;
    left: number;
    top: number;
}

export interface Emotion {
    anger: number;
    contempt: number;
    disgust: number;
    fear: number;
    happiness: number;
    neutral: number;
    sadness: number;
    surprise: number;
}