import {FaLock} from "react-icons/fa"
import React from 'react'

export default function NewPassword() {
  return (
    <div className="create-pass d-flex justify-content-center align-items-center">
      <div className="pass-form p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-3">Reset Password</h2>
        <p className="text-center mb-4">
          Please enter and confirm your new password.
        </p>

        <form>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <div className="input-group">
              <span span className="input-group-text">
                  <FaLock/>
              </span>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              placeholder="Enter your new password"
              autoComplete="false"
            />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <span span className="input-group-text">
                  <FaLock/>
              </span>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              autoComplete="false"
            />
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
