import React, { useState, useRef } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const dataKosong = {
    namaLengkap: "",
    email: "",
    noHp: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
    surat: "",
  };

  const [data, setData] = useState(dataKosong);
  const regex = /^[A-Za-z ]*$/;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumber = /[0-9]/;
  const [errMsg, setErrMsg] = useState("");
  const [errEml, setErrEml] = useState("");
  const [errHp, setErrHp] = useState("");
  const fotoSurat = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "namaLengkap") {
      if (regex.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Nama harus berupa huruf");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
  };

  const handleEmail = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (emailRegex.test(value)) {
        setErrEml("");
      } else {
        setErrEml("Format Email Tidak Cocok");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePhoneNumber = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "noHp") {
      if (phoneNumber.test(value)) {
        setErrHp("");
      } else {
        setErrHp("Nomor HP Tidak Valid");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    if (errMsg !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data pendaftar "${data.namaLengkap}" Berhasil diterima`);
    }
    event.preventDefault();
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg("");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nama Lengkap:
          <input
            type="text"
            name="namaLengkap"
            required
            value={data.namaLengkap}
            onChange={handleInput}
            className={styles.input}
          />
          <span className={styles.errorMessage}>{errMsg}</span>
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            required
            value={data.email}
            onChange={handleEmail}
            className={styles.input}
          />
          <span className={styles.errorMessage}>{errEml}</span>
        </label>
        <label>
          No Handphone:
          <input
            type="text"
            name="noHp"
            value={data.noHp}
            onChange={handlePhoneNumber}
            className={styles.input}
          />
          <span className={styles.errorMessage}>{errHp}</span>
        </label>
        <label>
          Latar Belakang Pendidikan:
          <div className={styles.pendidikan}>
            <label htmlFor="it">
              <input
                type="radio"
                name="pendidikan"
                value={data.pendidikan}
                onChange={handleChange}
              />
              IT
            </label>
            <label htmlFor="nonit">
              <input
                type="radio"
                name="pendidikan"
                value={data.pendidikan}
                onChange={handleChange}
              />
              Non IT
            </label>
          </div>
        </label>
        <label>
          Kelas Coding yang Dipilih:
          <select
            className={styles.labelarea}
            name="kelas"
            value={data.kelas}
            onChange={handleChange}
            required
          >
            <option value="golang" selected>
              Coding Backend with Golang
            </option>
            <option value="react">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input type="file" ref={fotoSurat} name="surat" required />
        </label>
        <label>
          Harapan Untuk Coding Bootcamp ini:
          <textarea
            name="harapan"
            value={data.harapan}
            onChange={handleChange}
            className={styles.inputarea}
          />
        </label>
        <div>
          <input type="submit" value="Submit" />
          <button onClick={resetData}>Reset</button>
        </div>
      </form>
    </>
  );
}
