import { useState, useEffect } from 'react';
import '../styles/FileUpload.css';
import prevArrow from '../assets/prevArrow.svg';
import nextArrow from '../assets/nextArrow.svg';

const FileUpload = () => {
    const [fileName, setFileName] = useState('');
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        let progressInterval;
        if (uploading && progress < 100) {
            progressInterval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = prev + 10;
                    if (newProgress >= 100) {
                        setUploading(false);
                        clearInterval(progressInterval);
                    }
                    return Math.min(newProgress, 100);
                });
            }, 500);
        }
        return () => clearInterval(progressInterval);
    }, [uploading, progress]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setProgress(0);
            setUploading(true);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        
        const file = e.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
            setProgress(0);
            setUploading(true);
        }
    };

    return (
        <div className="file-upload-container">
            <h2 className="title">Almost There!</h2>
            <p className="description">
                Please upload a valid government ID. Government ID verification will ensure user authenticity, preventing fraud and identity theft. It also helps comply with legal regulations and build trust within the platform.
            </p>
            <div className="upload-box">
                <label 
                    className={`file-input-label ${isDragging ? 'dragging' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input type="file" className="hidden-input" onChange={handleFileUpload} />
                    <span className="drag-drop-text">Drag & drop -OR-</span>
                    <button className="attach-button">Attach</button>
                </label>
                {fileName && (
                    <div className="file-status">
                        <p className="id-text">Valid Government ID</p>
                        <div className="status-container">
                            <p className="file-name">{fileName}</p>
                            <p className="progress-text">
                                {progress === 100 ? 'Done' : `${progress}% Upload`}
                            </p>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}
            </div>
            <div className="navigation-buttons">
                <button className="nav-button">
                    <img src={prevArrow} alt="Previous" className="arrow-icon" />
                </button>
                <button className="nav-button">
                    <img src={nextArrow} alt="Next" className="arrow-icon" />
                </button>
            </div>
        </div>
    );
};

export default FileUpload;
